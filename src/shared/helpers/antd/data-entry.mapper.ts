export class AntdDataEntryMapper {
    public getCascader(entries: []): any {
        return entries.map(({ key, children }: any) => {
            const mappedCascader = { value: key, label: key };

            return children ? { mappedCascader, children: this.getCascader(children) } : mappedCascader;
        }) || [];
    }
}