select evt.title
from Events evt
left join Resources res on evt.event_id = res.event_id
where res.resource_id is null;