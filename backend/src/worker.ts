import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { runWorkflow, runWorkflowFromNode } from './engine/runner';
import type { WorkflowJobData } from './engine/queue';

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
	console.error('REDIS_URL is not defined. Worker cannot start in Queue mode.');
	process.exit(1);
}

const connection = new IORedis(redisUrl, { maxRetriesPerRequest: null });

console.log('Starting BullMQ Worker for workflows-queue...');

const worker = new Worker<WorkflowJobData>(
	'workflows-queue',
	async (job) => {
		const { workflowId, startNodeId, triggerPayload, executionId } = job.data;
		console.log(`[Worker] Processing job ${job.id} for execution ${executionId}`);

		if (startNodeId) {
			await runWorkflowFromNode(workflowId, startNodeId, triggerPayload, executionId);
		} else {
			await runWorkflow(workflowId, triggerPayload, executionId);
		}
		
		console.log(`[Worker] Finished processing job ${job.id}`);
	},
	{ connection }
);

worker.on('failed', (job, err) => {
	console.error(`[Worker] Job ${job?.id} failed:`, err);
});

worker.on('ready', () => {
	console.log('[Worker] Worker is ready and waiting for jobs...');
});

// Graceful shutdown
process.on('SIGINT', async () => {
	console.log('Shutting down worker...');
	await worker.close();
	process.exit(0);
});
process.on('SIGTERM', async () => {
	console.log('Shutting down worker...');
	await worker.close();
	process.exit(0);
});
