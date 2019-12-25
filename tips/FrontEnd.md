## js
### filter
>input type to filter simultaneously

```html
<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column label="Date" prop="date">
    </el-table-column>
    <el-table-column label="Name" prop="name">
    </el-table-column>
    <el-table-column align="right">
        <template slot="header" slot-scope="scope">
            <el-input v-model="search2" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete
            </el-button>
        </template>
    </el-table-column>
</el-table>
```