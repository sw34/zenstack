import { loadSchema } from '@zenstackhq/testtools';

describe('Stack trace tests', () => {
    it('stack trace', async () => {
        const { enhance } = await loadSchema(
            `
        model Model {
            id String @id @default(uuid())
        }
        `
        );

        const db = enhance();
        let error: Error | undefined = undefined;

        try {
            await db.model.create({ data: {} });
        } catch (err) {
            error = err as Error;
        }

        expect(error?.stack).toContain(
            "Error calling enhanced Prisma method `model.create`: denied by policy: model entities failed 'create' check"
        );
        expect(error?.stack).toContain(`misc/stacktrace.test.ts`);
        expect((error as any).internalStack).toBeTruthy();
    });
});
