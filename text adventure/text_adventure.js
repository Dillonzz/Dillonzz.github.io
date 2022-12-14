alert("You are a survior of a crashed plane in the middle of the mountains. You need to try to find help by getting to a nearby civilization")

let river_or_mountain = prompt("Do you (1) follow the river or do you (2) go around the mountain that is in front of you? Please type 1 for river or 2 for mountain")

if (river_or_mountain == 1) {
    let trail_or_footprints = prompt("As you continue down the river you are presented with two paths. Do you (1) follow the trail to your left or (2) follow the footprints that were recently left?")
    if(trail_or_footprints==1){
    alert("As you walk down the trail you find an abandoned village with no food and a pack of wolves. The wolves havent eaten in days and they feast on you.  Game over...")
    } else {
      let mountain_or_footprints = prompt("As you follow the footprints you see a mountain with smoke coming off the top. Do you (1) climb to the top of the mountain or (2) continue following the footprints?")  
      if (mountain_or_footprints==1){
        alert("As you get closer to the top of the moumtain you slowily start to recognize that the mountain is actually a volcano, not a mountain. You trip and fall in. Game over... ")
      } else {
        alert("You follow the footprints and after an hour of walking you find a village with people. You ask the shop owner if there is a police hut, which there is. You inform the police of the plane crash. You win")
      }
    }
} else {
    alert("You continue walking around the mountain but dont realize how big it is. You are starving and dont find anyfood as you walk around. Gamo over...")
}