select usr.full_name, evt.title, evt.city, evt.start_date
from Users usr
join Registrations reg on usr.user_id = reg.user_id
join Events evt on reg.event_id = evt.event_id
where evt.status = 'upcoming'
and usr.city = evt.city
order by evt.start_date;