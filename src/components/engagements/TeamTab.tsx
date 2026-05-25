import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockTeamMembers } from "@/data/mockEngagementDetails";
import { Users, Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TeamTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
            <Users size={20} className="text-indigo-500" />
            Delivery Roster
          </h3>
          <p className="text-sm text-gray-500">Manage the professionals assigned to this engagement.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockTeamMembers.map(member => (
          <Card key={member.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex items-start gap-4">
              <Avatar className="h-12 w-12 border-2 border-slate-100">
                <AvatarFallback className="bg-indigo-50 text-indigo-700 font-bold">
                  {member.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="font-bold text-navy-950">{member.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{member.role}</p>
                <div className="flex justify-between items-center text-xs">
                  <Badge variant="secondary" className="bg-slate-100 font-normal">
                    {member.allocation}% Allocation
                  </Badge>
                  <Mail size={14} className="text-gray-400 hover:text-navy-950 cursor-pointer" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
