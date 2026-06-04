select usr.full_name,
       count(distinct reg.event_id) as events_attended,
       count(distinct fb.feedback_id) as feedbacks_submitted
from Users usr
left join Registrations reg on usr.user_id = reg.user_id
left join Feedback fb on usr.user_id = fb.user_id
group by usr.user_id, usr.full_name;