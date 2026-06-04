select evt.title,
       count(distinct reg.registration_id) as registrations,
       avg(fb.rating) as avg_rating
from Events evt
left join Registrations reg on evt.event_id = reg.event_id
left join Feedback fb on evt.event_id = fb.event_id
where evt.status = 'completed'
group by evt.event_id, evt.title;