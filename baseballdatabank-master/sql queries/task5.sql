select "franchID", "name", min("yearID"), max("yearID"), count("yearID")
from "Teams"
group by "franchID", "name"
order by count("yearID") desc;