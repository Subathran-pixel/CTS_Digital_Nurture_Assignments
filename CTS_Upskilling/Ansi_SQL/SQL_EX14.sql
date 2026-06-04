select evt.title, count(reg.registration_id) as total_registrations
from Events evt
join Registrations reg on evt.event_id = reg.event_id
group by evt.event_id, evt.title
order by total_registrations desc
limit 3;