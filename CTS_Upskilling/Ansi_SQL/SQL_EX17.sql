select speaker_name, count(*) as session_count
from Sessions
group by speaker_name
having count(*) > 1;