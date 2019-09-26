import camelize from 'camelize';

export class AntdDataDisplayMapper {

    public getCalendarNotes(notes: [], typeIndex: string, messageIndex: string) {
        return notes.map((key: any) => ({
            type: key[typeIndex] || 'success',
            content: key[messageIndex] || 'Upcoming Event',
        })) || [];
    }

    public getTableColumns(keys: string[]) {
        return keys.map((key: string) => ({ title: key, dataIndex: camelize(key), key: camelize(key) }))
    }

    public getTableColumnFilter(filters: []) {
        return filters.map(({ key, children }: any) => {
            const filter = { text: key, value: key };
            
            return children ? { ...filter, children: this.getTableColumnFilter(children) } : filter;
        });
    }

    public getTableData(data: []) {
        return data.map((item: any, index: number) => ({ key: index, ...item })) || [];
    }

    public getTableDataWithChildren(data: []) {
        return data.map(({ item, children }: any, index: number) => { 
            const row = { key: index, ...item };

            return children ? { ...row, children: this.getTableDataWithChildren(children) } : row;
        }) || [];
    }
    
}