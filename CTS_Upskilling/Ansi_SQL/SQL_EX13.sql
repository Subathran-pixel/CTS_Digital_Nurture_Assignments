select evt.city, avg(fb.rating) as avg_rating
from Events evt
join Feedback fb on evt.event_id = fb.event_id
group by evt.city;