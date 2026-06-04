select usr.full_name, evt.status, count(*) as total_events
from Users usr
join Events evt on usr.user_id = evt.organizer_id
group by usr.full_name, evt.status;