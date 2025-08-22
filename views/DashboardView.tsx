
import { Card } from "@/components/ui/card";
import { FileText, Database, AlertTriangle, Users, TrendingUp, Clock } from "lucide-react";

export const DashboardView = () => {
  const stats = [
    { title: "Total Crime Cases", value: "1,247", icon: FileText, color: "text-blue-600" },
    { title: "Active Investigations", value: "89", icon: Database, color: "text-green-600" },
    { title: "Data Matches Found", value: "23", icon: AlertTriangle, color: "text-red-600" },
    { title: "Records Processed", value: "15,432", icon: Users, color: "text-purple-600" },
  ];

  const recentAlerts = [
    { firNumber: "FIR-2024-001", type: "CDR Match", priority: "High", time: "2 hours ago" },
    { firNumber: "FIR-2024-045", type: "Bank Account Match", priority: "Medium", time: "4 hours ago" },
    { firNumber: "FIR-2024-023", type: "IDPR Match", priority: "High", time: "6 hours ago" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Crime data management and investigation tracking system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">{stat.title}</h3>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              +12% from last month
            </p>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Data Matches</h3>
          <div className="space-y-3">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className={`h-4 w-4 ${
                    alert.priority === 'High' ? 'text-red-500' : 'text-yellow-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium">{alert.firNumber}</p>
                    <p className="text-xs text-muted-foreground">{alert.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {alert.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid gap-3">
            <button className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <FileText className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-sm font-medium">Add New Crime Record</span>
            </button>
            <button className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <Database className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm font-medium">Import Data Files</span>
            </button>
            <button className="flex items-center p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <Users className="h-5 w-5 text-purple-600 mr-3" />
              <span className="text-sm font-medium">Cross-Reference Search</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};
