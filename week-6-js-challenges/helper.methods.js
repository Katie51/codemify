class Helpers {
    filterMatchesByLocationAndStatus(response) {

        const users = response.matches.filter((match) => match.locationlvl1 == "Germany" && match.status == "canceled").map((match) => match.matchId)

        return users;
    }

    filterMatchesByCoatingAndShower(response) {

        const result = response.matches.filter((match) => match.matchInfo.coating == "Main.artificialGrass" && match.matchInfo.isShower === true).map((match) => match.matchId)

        return result;
    }

    filterMatchesByLocationAndPrice(response) {

        const result = response.matches.filter((match) => match.locationlvl2 == "Berlin" && match.price > 0).map((match) => match.matchId)

        return result;
    }

    filterMatchesByCreatorFeeAndStatus(response) {

        const result = response.matches.filter((match) => match.creatorFeePerPlayer > 3 && match.status == "canceled").map((match) => match.matchId)

        return result;
    }

    filterMatchesByCoveringAndDressingRoom(response) {

        const result = response.matches.filter((match) => match.matchInfo.covering == "Main.onTheStreet" && match.matchInfo.isDressingRoom === true).map((match) => match.matchId)


        return result;
    }
}

export default new Helpers()