
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  BarChart, 
  Calendar, 
  Check, // Added the missing Check icon import
  ChevronRight, 
  Clock, 
  Home, 
  LayoutDashboard, 
  LineChart, 
  LogOut, 
  Menu, 
  MessageCircle, 
  Settings, 
  User, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ResponsiveContainer, 
  LineChart as ReLineChart, 
  Line, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip 
} from "recharts";

// Mock data for the charts
const monthlyData = [
  { name: "Jan", value: 35 },
  { name: "Feb", value: 42 },
  { name: "Mar", value: 38 },
  { name: "Apr", value: 45 },
  { name: "May", value: 50 },
  { name: "Jun", value: 58 },
  { name: "Jul", value: 65 },
];

const todayActivities = [
  {
    id: 1,
    title: "Focus Training",
    time: "9:00 AM",
    duration: "15 min",
    completed: true,
  },
  {
    id: 2,
    title: "Memory Exercise",
    time: "1:30 PM",
    duration: "20 min",
    completed: false,
  },
  {
    id: 3,
    title: "Creativity Session",
    time: "5:00 PM",
    duration: "30 min",
    completed: false,
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleActivityComplete = (activityId: number) => {
    toast({
      title: "Activity Completed",
      description: "Great job! Keep up the good work.",
    });
  };

  return (
    <div className="min-h-screen bg-mindmatrix-background flex">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="bg-white"
        >
          {sidebarOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg border-r border-mindmatrix-border w-64 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-mindmatrix-border">
            <h1 className="text-2xl font-bold text-mindmatrix-primary">MindMatrix</h1>
          </div>
          
          <nav className="flex-grow p-4 space-y-1">
            <a
              href="#"
              className="flex items-center px-4 py-3 text-mindmatrix-primary bg-mindmatrix-accent rounded-lg font-medium"
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </a>
            
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Schedule
            </a>
            
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <LineChart className="mr-3 h-5 w-5" />
              Progress
            </a>
            
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Messages
            </a>
          </nav>
          
          <div className="p-4 border-t border-mindmatrix-border">
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </a>
            
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Log out
            </a>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <div className={`flex-grow transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "ml-0 lg:ml-64"}`}>
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
                <p className="text-gray-600">Here's your progress summary</p>
              </div>
              
              <div className="flex items-center">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Settings className="h-5 w-5" />
                </button>
                <button className="ml-2 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mindmatrix-secondary text-white flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </div>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Daily Goal</h3>
                <div className="p-2 bg-mindmatrix-accent rounded-full">
                  <BarChart className="h-5 w-5 text-mindmatrix-primary" />
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2 bg-gray-100" />
              <p className="mt-4 text-sm text-gray-600">2 of 3 activities completed</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Focus Score</h3>
                <div className="p-2 bg-mindmatrix-accent rounded-full">
                  <LineChart className="h-5 w-5 text-mindmatrix-primary" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">78</span>
                <span className="text-green-500 text-sm">+12%</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">15% above your average</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Weekly Streak</h3>
                <div className="p-2 bg-mindmatrix-accent rounded-full">
                  <Calendar className="h-5 w-5 text-mindmatrix-primary" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">5</span>
                <span className="text-sm">days</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">Keep going for your best record!</p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-2 p-6">
              <h3 className="text-lg font-medium mb-6">Progress Overview</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart data={monthlyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="value" stroke="#4C35DE" strokeWidth={2} dot={{ r: 4 }} />
                    <CartesianGrid stroke="#EEEEEE" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                  </ReLineChart>
                </ResponsiveContainer>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Today's Activities</h3>
                <Button variant="link" className="text-mindmatrix-primary p-0">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {todayActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{activity.time}</span>
                        <span className="mx-2">•</span>
                        <span>{activity.duration}</span>
                      </div>
                    </div>
                    {activity.completed ? (
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="h-8 px-3 rounded-full border-mindmatrix-primary text-mindmatrix-primary"
                        onClick={() => handleActivityComplete(activity.id)}
                      >
                        Start
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              
              <Button
                variant="outline"
                className="w-full mt-4 border-dashed border-gray-300 text-gray-600 hover:text-mindmatrix-primary"
              >
                + Add New Activity
              </Button>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
