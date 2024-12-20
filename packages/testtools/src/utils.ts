export async function $require(spec: string) {
    if (typeof import.meta?.url !== 'undefined') {
        const r = await import(spec);
        return r.default ?? r;
    } else {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        return require(spec);
    }
}
