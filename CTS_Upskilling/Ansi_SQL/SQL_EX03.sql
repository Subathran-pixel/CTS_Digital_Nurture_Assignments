select *
from Users
where user_id not in (
    select reg.user_id
    from Registrations reg
    where reg.registration_date >= curdate() - interval 90 day
);