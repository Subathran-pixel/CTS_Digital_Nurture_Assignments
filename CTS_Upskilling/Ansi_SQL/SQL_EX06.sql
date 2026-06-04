select evt.title, count(res.resource_id) as total_resources
from Events evt
left join Resources res on evt.event_id = res.event_id
group by evt.event_id, evt.title;