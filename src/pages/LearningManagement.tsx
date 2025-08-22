import { ArrowLeft, BookOpen, Users, Award, Play, Clock, Star, CheckCircle, BarChart3, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";

const LearningManagement = () => {
  const [enrolledCourses] = useState([
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      progress: 75,
      duration: "8 weeks",
      rating: 4.8,
      lessons: 24,
      completed: 18,
      thumbnail: "/api/placeholder/300/200",
      category: "Frontend"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Michael Chen",
      progress: 45,
      duration: "12 weeks",
      rating: 4.9,
      lessons: 36,
      completed: 16,
      thumbnail: "/api/placeholder/300/200",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emma Wilson",
      progress: 90,
      duration: "6 weeks",
      rating: 4.7,
      lessons: 18,
      completed: 16,
      thumbnail: "/api/placeholder/300/200",
      category: "Design"
    }
  ]);

  const [availableCourses] = useState([
    {
      id: 4,
      title: "Full Stack JavaScript",
      instructor: "Alex Rodriguez",
      duration: "10 weeks",
      rating: 4.6,
      students: 1254,
      price: "$99",
      category: "Backend"
    },
    {
      id: 5,
      title: "Data Science with Python",
      instructor: "Dr. Lisa Chang",
      duration: "14 weeks",
      rating: 4.8,
      students: 987,
      price: "$129",
      category: "Data Science"
    }
  ]);

  const stats = [
    { label: "Courses Completed", value: "12", icon: Award },
    { label: "Hours Learned", value: "89", icon: Clock },
    { label: "Certificates Earned", value: "8", icon: CheckCircle },
    { label: "Current Streak", value: "15 days", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold">EduPlatform LMS</h1>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/80">
              <Users className="w-4 h-4 mr-2" />
              Join Class
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">

            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Welcome back, Toheeb!</h2>
              <p className="text-muted-foreground">Continue your learning journey and achieve your goals</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-card p-6 text-center hover-lift">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            {/* Course Tabs */}
            <Tabs defaultValue="enrolled" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="enrolled">My Courses</TabsTrigger>
                <TabsTrigger value="available">Explore Courses</TabsTrigger>
                <TabsTrigger value="analytics">Progress Analytics</TabsTrigger>
              </TabsList>

              {/* Enrolled Courses */}
              <TabsContent value="enrolled">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="glass-card overflow-hidden hover-lift hover-glow group">
                      {/* Course Thumbnail */}
                      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-primary/60" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{course.category}</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Button size="sm" variant="secondary" className="rounded-full">
                            <Play className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="p-6">
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          by {course.instructor}
                        </p>

                        {/* Progress */}
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <p className="text-xs text-muted-foreground mt-1">
                            {course.completed} of {course.lessons} lessons completed
                          </p>
                        </div>

                        {/* Course Meta */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {course.rating}
                          </div>
                        </div>

                        <Button className="w-full" variant="outline">
                          Continue Learning
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Available Courses */}
              <TabsContent value="available">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableCourses.map((course) => (
                    <Card key={course.id} className="glass-card overflow-hidden hover-lift hover-glow">
                      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-primary/60" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge>{course.category}</Badge>
                        </div>
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-sm font-bold">
                          {course.price}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-bold mb-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          by {course.instructor}
                        </p>

                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {course.students} students
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {course.rating}
                          </div>
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/80">
                          Enroll Now
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Analytics */}
              <TabsContent value="analytics">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="glass-card p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      Learning Progress
                    </h3>
                    <div className="space-y-4">
                      {enrolledCourses.map((course) => (
                        <div key={course.id}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{course.title}</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="glass-card p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Recent Achievements
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Course Completed</p>
                          <p className="text-xs text-muted-foreground">UI/UX Design Principles</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Certificate Earned</p>
                          <p className="text-xs text-muted-foreground">React Development</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-card border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 EduPlatform LMS Demo - Developed by Toheeb Abiodun Mustapha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LearningManagement;