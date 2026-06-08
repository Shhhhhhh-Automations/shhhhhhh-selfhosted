import { Queue } from 'bullmq';
import IORedis from 'ioredis';
import { runWorkflow, runWorkflowFromNode } from './runner';

export const redisUrl = process.env.REDIS_URL;

// We only instantiate the queue if REDIS_URL is provided
export const connection = redisUrl ? new IORedis(redisUrl, { maxRetriesPerRequest: null }) : null;

export const workflowsQueue = connection 
	? new Queue('workflows-queue', { connection }) 
	: null;

export interface WorkflowJobData {
	executionId: string;
	workflowId: string;
	startNodeId?: string;
	triggerPayload: any;
}

/**
 * Enqueues a workflow execution. 
 * If Redis is not configured, it falls back to synchronous execution (main mode).
 */
export async function enqueueWorkflow(data: Omit<WorkflowJobData, 'executionId'>, predefinedExecutionId: string): Promise<string> {
	if (workflowsQueue) {
		await workflowsQueue.add('execute-workflow', {
			...data,
			executionId: predefinedExecutionId
		});
		return predefinedExecutionId;
	} else {
		// Fallback to synchronous in-memory execution (useful for dev without Redis)
		// We execute it in the background to avoid blocking the HTTP request immediately
		setTimeout(async () => {
			try {
				if (data.startNodeId) {
					await runWorkflowFromNode(data.workflowId, data.startNodeId, data.triggerPayload, predefinedExecutionId);
				} else {
					await runWorkflow(data.workflowId, data.triggerPayload, predefinedExecutionId);
				}
			} catch (err) {
				console.error(`Fallback execution failed for ${predefinedExecutionId}:`, err);
			}
		}, 0);
		return predefinedExecutionId;
	}
}
