import { useState } from "react"

import {
  DataTable,
  DataTableSelectionMultipleChangeEvent,
} from "primereact/datatable"

import { Column } from "primereact/column"

const items: Person[] = [
  { firstName: "John", lastName: "Smith" },
  { firstName: "Jane", lastName: "Smith" },
]

function App() {
  const [selected, setSelected] = useState<Person[]>([])

  return (
    <DataTable
      value={items}
      tableClassName="table table-striped table-hover"
      selectionMode="checkbox"
      selection={selected}
      onSelectionChange={(e: DataTableSelectionMultipleChangeEvent<Person[]>) =>
        setSelected(e.value)
      }
      dataKey="id"
    >
      <Column selectionMode="multiple" headerStyle={{ width: "2rem" }} />
      <Column field="firstName" header="First name" />
      <Column field="lastName" header="Last name" />
    </DataTable>
  )
}

export default App
