import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockSessions } from "@/data/mockEngagementDetails" // TODO: Task 9 — wire up data;
import { Calendar as CalendarIcon, Clock, Video } from "lucide-react";

export const SessionsTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
            <CalendarIcon size={20} className="text-orange-500" />
            Governance Sessions
          </h3>
          <p className="text-sm text-gray-500">Upcoming workshops, reviews, and steering committees.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mockSessions.map(session => (
          <Card key={session.id} className="hover:border-orange-200 transition-colors">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="text-orange-600 bg-orange-50 border-orange-200">
                  {session.type}
                </Badge>
                <Badge variant="secondary" className="bg-slate-100 text-gray-600">{session.status}</Badge>
              </div>
              <h4 className="text-base font-bold text-navy-950 mb-3">{session.title}</h4>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CalendarIcon size={14} className="text-gray-400" />
                  <span>{session.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gray-400" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video size={14} className="text-gray-400" />
                  <a href="#" className="text-blue-600 hover:underline">Join Virtual Meeting</a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
