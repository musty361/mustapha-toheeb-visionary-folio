import { useState } from "react";
import { Plus, Check, Trash2, ArrowLeft, Clock, User, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const TaskManagement = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design user interface mockups",
      description: "Create wireframes and high-fidelity designs for the new dashboard",
      status: "In Progress",
      priority: "High",
      assignee: "John Doe",
      dueDate: "2024-12-25",
      completed: false
    },
    {
      id: 2,
      title: "Implement authentication system",
      description: "Set up JWT-based authentication with role management",
      status: "Todo",
      priority: "High",
      assignee: "Jane Smith",
      dueDate: "2024-12-30",
      completed: false
    },
    {
      id: 3,
      title: "Write unit tests",
      description: "Add comprehensive test coverage for all components",
      status: "Completed",
      priority: "Medium",
      assignee: "Mike Johnson",
      dueDate: "2024-12-20",
      completed: true
    }
  ]);

  const [newTask, setNewTask] = useState({ title: "", description: "", priority: "Medium", assignee: "" });
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (newTask.title.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        ...newTask,
        status: "Todo",
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        completed: false
      }]);
      setNewTask({ title: "", description: "", priority: "Medium", assignee: "" });
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed, status: task.completed ? "Todo" : "Completed" }
        : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return task.status === filter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-500";
      case "Medium": return "text-yellow-500";
      case "Low": return "text-green-500";
      default: return "text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-400";
      case "In Progress": return "bg-blue-500/20 text-blue-400";
      case "Todo": return "bg-gray-500/20 text-gray-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="hover:bg-secondary"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
              <h1 className="text-2xl font-bold gradient-text">TaskFlow Pro</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <select 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-secondary border border-border rounded px-3 py-1 text-sm"
                >
                  <option value="All">All Tasks</option>
                  <option value="Todo">Todo</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text">{tasks.length}</div>
            <div className="text-muted-foreground">Total Tasks</div>
          </Card>
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">{tasks.filter(t => t.status === "In Progress").length}</div>
            <div className="text-muted-foreground">In Progress</div>
          </Card>
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-green-400">{tasks.filter(t => t.completed).length}</div>
            <div className="text-muted-foreground">Completed</div>
          </Card>
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400">{tasks.filter(t => !t.completed).length}</div>
            <div className="text-muted-foreground">Pending</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Add New Task */}
          <div className="lg:col-span-1">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">Add New Task</h3>
              
              <div className="space-y-4">
                <Input
                  placeholder="Task title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  className="bg-secondary border-border"
                />
                
                <textarea
                  placeholder="Task description"
                  value={newTask.description}
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                  className="w-full p-3 bg-secondary border border-border rounded-lg resize-none h-20 text-sm"
                />
                
                <select
                  value={newTask.priority}
                  onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                  className="w-full p-3 bg-secondary border border-border rounded-lg text-sm"
                >
                  <option value="Low">Low Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="High">High Priority</option>
                </select>
                
                <Input
                  placeholder="Assignee"
                  value={newTask.assignee}
                  onChange={(e) => setNewTask({...newTask, assignee: e.target.value})}
                  className="bg-secondary border-border"
                />
                
                <Button 
                  onClick={addTask}
                  className="w-full bg-primary hover:bg-primary/80"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              </div>
            </Card>
          </div>

          {/* Task List */}
          <div className="lg:col-span-2">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">
                Tasks ({filteredTasks.length})
              </h3>
              
              <div className="space-y-4">
                {filteredTasks.map((task) => (
                  <div 
                    key={task.id}
                    className={`glass-card p-4 rounded-lg border border-white/10 hover-lift ${
                      task.completed ? "opacity-70" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              task.completed 
                                ? "bg-green-500 border-green-500" 
                                : "border-border hover:border-primary"
                            }`}
                          >
                            {task.completed && <Check className="w-3 h-3 text-white" />}
                          </button>
                          
                          <h4 className={`font-semibold ${
                            task.completed ? "line-through text-muted-foreground" : ""
                          }`}>
                            {task.title}
                          </h4>
                          
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>
                            {task.status}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-3">
                          {task.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{task.dueDate}</span>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{task.assignee}</span>
                          </div>
                          
                          <span className={`font-medium ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                {filteredTasks.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    No tasks found. Add a new task to get started!
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 glass-card border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 TaskFlow Pro - Demo Task Management App by Toheeb Abiodun Mustapha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TaskManagement;