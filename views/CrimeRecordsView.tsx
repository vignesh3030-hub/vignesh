
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { FileText, Plus, Search, FolderOpen, AlertTriangle } from "lucide-react";
import { CrimeRecordModal } from "@/components/modals/CrimeRecordModal";

export const CrimeRecordsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const crimeRecords = [
    {
      firNumber: "FIR-2024-001",
      crimeType: "Fraud",
      status: "Active",
      date: "2024-01-15",
      officer: "Inspector Sharma",
      dataCount: 15,
      hasMatches: true
    },
    {
      firNumber: "FIR-2024-002",
      crimeType: "Theft",
      status: "Under Investigation",
      date: "2024-01-20",
      officer: "SI Patel",
      dataCount: 8,
      hasMatches: false
    },
    {
      firNumber: "FIR-2024-003",
      crimeType: "Cybercrime",
      status: "Active",
      date: "2024-01-22",
      officer: "Inspector Kumar",
      dataCount: 23,
      hasMatches: true
    },
  ];

  const filteredRecords = crimeRecords.filter(record =>
    record.firNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.crimeType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Crime Records</h2>
          <p className="text-muted-foreground">
            Manage and track all crime investigation records
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Record
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by FIR number or crime type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>FIR Number</TableHead>
              <TableHead>Crime Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Investigating Officer</TableHead>
              <TableHead>Data Records</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map((record) => (
              <TableRow key={record.firNumber}>
                <TableCell className="font-medium">{record.firNumber}</TableCell>
                <TableCell>{record.crimeType}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    record.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {record.status}
                  </span>
                </TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.officer}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <span>{record.dataCount} records</span>
                    {record.hasMatches && (
                      <AlertTriangle className="h-4 w-4 text-red-500" aria-label="Has data matches" />
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <FolderOpen className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <CrimeRecordModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
