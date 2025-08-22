
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, Eye, CheckCircle } from "lucide-react";

export const AlertsView = () => {
  const alerts = [
    {
      id: "1",
      type: "Phone Number Match",
      firNumbers: ["FIR-2024-001", "FIR-2024-015"],
      data: "+91-9876543210",
      priority: "High",
      timestamp: "2024-01-25 14:30",
      status: "New"
    },
    {
      id: "2",
      type: "Bank Account Match", 
      firNumbers: ["FIR-2024-003", "FIR-2024-021"],
      data: "HDFC-456789123",
      priority: "Medium",
      timestamp: "2024-01-25 12:15",
      status: "Reviewed"
    },
    {
      id: "3",
      type: "Address Match",
      firNumbers: ["FIR-2024-007", "FIR-2024-018"],
      data: "123 Main Street, Mumbai",
      priority: "High",
      timestamp: "2024-01-25 10:45",
      status: "New"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-600 bg-red-50";
      case "Medium": return "text-yellow-600 bg-yellow-50";
      case "Low": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "text-blue-600 bg-blue-50";
      case "Reviewed": return "text-green-600 bg-green-50";
      case "Resolved": return "text-gray-600 bg-gray-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Data Match Alerts</h2>
        <p className="text-muted-foreground">
          Review cross-references and matches found across different crime cases
        </p>
      </div>

      <div className="grid gap-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold">{alert.type}</h3>
                    <Badge className={getPriorityColor(alert.priority)}>
                      {alert.priority} Priority
                    </Badge>
                    <Badge className={getStatusColor(alert.status)}>
                      {alert.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Matched data: <span className="font-mono">{alert.data}</span>
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {alert.timestamp}
                    </span>
                    <span>
                      Cases: {alert.firNumbers.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button size="sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark Reviewed
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
