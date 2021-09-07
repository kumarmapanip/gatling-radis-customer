package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class CustomerApiSimulation extends Simulation {

  //conf
  val value_conf = http.baseUrl("https://api.rvymart.com:443")
    .header("Accept",value="application/json")
    .header(name="content-type", value ="application/json")


  //scenario
  val scn = scenario("Customer Management Api operations")

    .exec(http("Get all Customer details")
      .get("/cs/rvy/api/cm/v1/customers")
      .check(status is 200))

    .exec(http("Insert Customer")
      .post("/cs/rvy/api/cm/v1/customers")
      .body(RawFileBody(filePath = "./src/test/resources/bodies/addCustomer.json")).asJson
      .header(name="content-type",value = "application/json")
      .check(status is 200))

//     .exec(http("Get by id")
//       .get("/rvy/api//cm/v1/customers/1")
//       .check(status is 200))

//     .exec(http("Update Customer")
//       .put("/cs/rvy/api/cm/v1/customers")
//       .body(RawFileBody(filePath = "./src/test/resources/bodies/putCustomer.json")).asJson
//       .header(name="content-type",value = "application/json")
//       .check(status is 200))



  //setup
  //setUp(scn.inject(atOnceUsers(users=60))).protocols(value_conf)
  setUp(scn.inject(constantConcurrentUsers(100) during(6))).protocols(value_conf)


}
