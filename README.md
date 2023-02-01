## tradesmen-project

![alt text](https://res.cloudinary.com/quotezone/images/q_auto/v1626350510/wp/tradesman-insurance/tradesman-insurance.png?_i=AA)

"Do you need a Tradesman/woman, well look no further here at TradesMatch. we offer a comprehensive matching service to offer a job well done. Hassle free, easy to use and job well done. that is the TradesMatch way."

## About us

Here at the TradesMatch. We match customers with qualified Tradespeople by services and location. Customer have unique opportunity to look at the potential TradesPerson they would like to hire for job depending on their service requirement and location.
TradeMatch also sign up qualified Tradespeople looking for jobs, bridging consumer with qualified Tradespeople. Hassle free and easy to use Web-application with purpose on delivering a job well done.

## Target Audience

_For_ - Customer looking for Gas/handyman work  
_Who_- want quality assured work done in a convenient and hassle free manner
_The_ - GasSavers Referrals
_Is a_ - Is a referral service that books quality tradesmen to customer in need of fixes and repairs
_That_ - offers quick and easy booking services of professional vetted tradesmen
_Unlike_ - the traditional method of cowboy workers, GasSavers provide qualified local tradesmen that have undergone an extensive background check, to ensure quality of workmanship and professionalism.  
_Our Product_ - is a trusted, local tradesmen provider that offers a variety of services.

## Authors

**[Wardhere Adan: Dev](https://github.com/Wardhere1)** - Leader of the World Economic Forum (Icon).

**[Mohamed Khalaf: Dev](https://github.com/MohamedKhalaf92)** - Leader of the new world order (Mogul).

## Important DOCUMENTS - LINKS BELOW TO REFER TO .

_Project Document link_ - https://docs.google.com/document/d/1jiVs3CpTkgytARCGZEnJKCALyMyT7UNK22APEVvKTTE/edit#

_Ways of Working Document link_ - https://docs.google.com/document/d/17NrS0Ni8SzBTWmQmBezDep7tEHaR9xurdAKx3JsqQbw/edit

_Storyboard user Journey Document link_ - https://excalidraw.com/#room=af206e1c8dabaa4cd063,djHNeS_42xMVQB1uJ23IXA

_Prototype Document for website_ - https://www.figma.com/file/k1GD3Coyf1d30zacQBBcKg/Tradeline?node-id=0%3A1&t=tOx4Mj5KcBC7jgZu-1

_MOSCOW board link_ - https://jamboard.google.com/d/1oHwaZbQnF0tYgzHBhX7HszIk5y_8cXS8DFkxzOOtyWs/viewer?f=2

## Web application instructions

## Running Docker Compose

Run the ./rebuild-docker-containers.sh script to run the below commands:

- remove the old containers, if any
docker compose down

- build and run the containers
docker compose up --build -d

- see whats up
docker ps -a

## Running Server Locally

Run the ./rebuild-server-locally.sh script to run the below commands (This ensures that our local machines can read the env variables that we set up before running the server):

source .env

node server/server.js



