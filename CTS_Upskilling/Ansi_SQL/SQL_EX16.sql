select *
from Users
where registration_date >= curdate() - interval 30 day
and user_id not in (
    select reg.user_id
    from Registrations reg
);