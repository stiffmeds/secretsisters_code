// var socket = io();
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

class optimalNode {
    constructor(ID, extraID, type, acceptedEvents, zone) {
        this.ID = ID;
        this.extraID = extraID;
        this.type = type;
        this.acceptedEvents = acceptedEvents;
        this.zone = zone;
    }
}

const optimalNodes = [
    // Senenthia: 2 events, 4 corruptors
    new optimalNode("sen_6", "Betty", "event", ["e_sen6_b"], "Senenthia"),
    new optimalNode("sen_9", "Farm Corral", "combat", [], "Senenthia"),
    new optimalNode("secta_2", "Corridor", "combat", [], "Senenthia"),
    new optimalNode("sen_19", "Northern Plains", "combat", [], "Senenthia"),
    new optimalNode("sen_37", "Soldier Trainer", "event", ["e_sen37_a"], "Senenthia"),
    new optimalNode("sen_28", "South Fang Gate", "combat", [], "Senenthia"),

    // Aquarfall: 7 corruptors
    new optimalNode("aqua_4", "East Path", "combat", [], "Aquarfall"),
    new optimalNode("aqua_12", "Patrol Point", "combat", [], "Aquarfall"),
    new optimalNode("aqua_10", "Creeper Bridge", "combat", [], "Aquarfall"),
    new optimalNode("aqua_15", "Poisonous Zone", "combat", [], "Aquarfall"),
    new optimalNode("spider_3", "Cave Passage", "combat", [], "Aquarfall"),
    new optimalNode("spider_4", "Cave Center", "combat", [], "Aquarfall"),
    new optimalNode("aqua_33", "Temple Ruins", "combat", [], "Aquarfall"),

    // Faeborg: 2 events, 6 corruptors
    new optimalNode("faen_7", "Monster Trainer", "event", ["e_faen7_a"], "Faeborg"),
    new optimalNode("faen_8", "Shore", "combat", [], "Faeborg"),
    new optimalNode("faen_14", "Closed Gate", "combat", [], "Faeborg"),
    new optimalNode("faen_24", "City Gates", "combat", [], "Faeborg"),
    new optimalNode("faen_40", "Binks/Charls", "event", ["e_faen40_a", "e_faen40_b"], "Faeborg"),
    new optimalNode("sewers_2", "Corridor", "combat", [], "Faeborg"),
    new optimalNode("sewers_12", "Drain", "combat", [], "Faeborg"),
    new optimalNode("faen_37", "Palace Stairs", "combat", [], "Faeborg"),

    // Velkarath: 6 corruptors
    new optimalNode("velka_2", "North Road", "combat", [], "Velkarath"),
    new optimalNode("velka_5", "Ridge Road", "combat", [], "Velkarath"),
    new optimalNode("velka_13", "Stone Staircase", "combat", [], "Velkarath"),
    new optimalNode("forge_1", "Corridor", "combat", [], "Velkarath"), // using upper path because it's more consistent
    new optimalNode("velka_28", "Stone Bridge", "combat", [], "Velkarath"),
    new optimalNode("velka_31", "Volcano Summit", "combat", [], "Velkarath"),

    // Ulminin: TBD!

    // Voidlow: 1 event, 5 corruptors
    new optimalNode("voidlow_2", "Ruins", "combat", [], "Voidlow"),
    new optimalNode("voidlow_9", "Ruins", "combat", [], "Voidlow"),
    new optimalNode("voidlow_10", "Ruins", "combat", [], "Voidlow"),
    new optimalNode("voidlow_27", "Chromatic Slime", "event", ["e_voidlow27_a"], "Voidlow"),
    new optimalNode("voidlow_19", "Ruins", "combat", [], "Voidlow"),
    new optimalNode("voidlow_22", "Ruins", "combat", [], "Voidlow"),

    // Voidhigh: 2 corruptors
    new optimalNode("voidhigh_2", "Ruins", "combat", [], "Voidhigh"),
    new optimalNode("voidhigh_10", "Ruins", "combat", [], "Voidhigh")
];

const optimalNodeList = ["sen_0", "sen_41", "sen_44", "sen_2", "sen_6", "sen_9", "sen_39", "sen_12", "secta_0", "secta_1", "secta_2", "secta_6", "secta_7", "secta_5", "secta_8", "sen_19", "sen_37", "sen_25", "sen_28", "sen_27", "sen_45", "sen_33", "sen_34", "aqua_0", "aqua_1", "aqua_4", "aqua_8", "aqua_12", "aqua_11", "aqua_10", "aqua_13", "aqua_15", "aqua_16", "spider_1", "spider_3", "spider_4", "spider_6", "spider_8", "spider_9", "aqua_32", "aqua_33", "aqua_35", "velka_0", "velka_1", "velka_2", "velka_5", "velka_12", "velka_13", "velka_16", "velka_17", "forge_0", "forge_9", "forge_1", "forge_3", "forge_5", "forge_6", "forge_7", "velka_29", "velka_28", "velka_31", "velka_32", "velka_33", "faen_0", "faen_1", "faen_3", "faen_7", "faen_8", "faen_14", "faen_19", "faen_24", "faen_32", "faen_40", "faen_28", "sewers_1", "sewers_2", "sewers_10", "sewers_12", "sewers_8", "sewers_9", "faen_36", "faen_37", "faen_38", "faen_39", "voidlow_0", "voidlow_1", "voidlow_2", "voidlow_4", "voidlow_9", "voidlow_10", "voidlow_27", "voidlow_19", "voidlow_21", "voidlow_22", "voidlow_25", "voidlow_26", "voidhigh_0", "voidhigh_2", "voidhigh_4", "voidhigh_6", "voidhigh_8", "voidhigh_10", "voidhigh_12", "voidhigh_13"];

const fullNodeList = ["sen_0", "sen_1", "sen_2", "sen_3", "sen_4", "sen_5", "sen_6", "sen_7", "sen_8", "sen_9", "sen_10", "sen_11", "sen_12", "sen_13", "sen_14", "sen_15", "sen_16", "sen_17", "sen_18", "sen_19", "sen_20", "sen_21", "sen_22", "sen_23", "sen_24", "sen_25", "sen_26", "sen_27", "sen_28", "sen_29", "sen_30", "sen_31", "sen_32", "sen_33", "sen_34", "sen_35", "sen_36", "sen_37", "sen_38", "sen_39", "sen_40", "sen_41", "sen_42", "sen_43", "sen_44", "sen_45", "sen_46", "secta_0", "secta_1", "secta_2", "secta_3", "secta_4", "secta_5", "secta_6", "secta_7", "secta_8", "aqua_0", "aqua_1", "aqua_2", "aqua_3", "aqua_4", "aqua_5", "aqua_6", "aqua_7", "aqua_8", "aqua_9", "aqua_10", "aqua_11", "aqua_12", "aqua_13", "aqua_14", "aqua_15", "aqua_16", "aqua_17", "aqua_18", "aqua_19", "aqua_20", "aqua_21", "aqua_22", "aqua_23", "aqua_24", "aqua_25", "aqua_26", "aqua_27", "aqua_28", "aqua_29", "aqua_30", "aqua_31", "aqua_32", "aqua_33", "aqua_34", "aqua_35", "aqua_36", "aqua_37", "aqua_38", "aqua_39", "aqua_40", "aqua_41", "aqua_42", "aqua_43", "spider_0", "spider_1", "spider_2", "spider_3", "spider_4", "spider_5", "spider_6", "spider_7", "spider_8", "spider_9", "velka_0", "velka_1", "velka_2", "velka_3", "velka_4", "velka_5", "velka_6", "velka_7", "velka_8", "velka_9", "velka_10", "velka_11", "velka_12", "velka_13", "velka_14", "velka_15", "velka_16", "velka_17", "velka_18", "velka_19", "velka_20", "velka_21", "velka_22", "velka_23", "velka_24", "velka_25", "velka_26", "velka_27", "velka_28", "velka_29", "velka_30", "velka_31", "velka_32", "velka_33", "velka_34", "velka_35", "velka_36", "forge_0", "forge_1", "forge_2", "forge_3", "forge_4", "forge_5", "forge_6", "forge_7", "forge_8", "forge_9", "faen_0", "faen_1", "faen_2", "faen_3", "faen_4", "faen_5", "faen_6", "faen_7", "faen_8", "faen_9", "faen_10", "faen_11", "faen_12", "faen_13", "faen_14", "faen_15", "faen_16", "faen_17", "faen_18", "faen_19", "faen_20", "faen_21", "faen_22", "faen_23", "faen_24", "faen_25", "faen_26", "faen_27", "faen_28", "faen_29", "faen_30", "faen_31", "faen_32", "faen_33", "faen_34", "faen_35", "faen_36", "faen_37", "faen_38", "faen_39", "faen_40", "sewers_0", "sewers_1", "sewers_2", "sewers_3", "sewers_4", "sewers_5", "sewers_6", "sewers_7", "sewers_8", "sewers_9", "sewers_10", "sewers_11", "sewers_12", "ulmin_0", "ulmin_1", "ulmin_2", "ulmin_3", "ulmin_4", "ulmin_5", "ulmin_6", "ulmin_7", "ulmin_8", "ulmin_9", "ulmin_10", "ulmin_11", "ulmin_12", "ulmin_13", "ulmin_14", "ulmin_15", "ulmin_16", "ulmin_17", "ulmin_18", "ulmin_19", "ulmin_20", "ulmin_21", "ulmin_22", "ulmin_23", "ulmin_24", "ulmin_25", "ulmin_26", "ulmin_27", "ulmin_28", "ulmin_29", "ulmin_30", "ulmin_31", "ulmin_32", "ulmin_33", "ulmin_34", "ulmin_35", "ulmin_36", "ulmin_37", "ulmin_38", "ulmin_39", "ulmin_40", "ulmin_41", "ulmin_42", "ulmin_43", "ulmin_44", "ulmin_45", "ulmin_46", "ulmin_47", "ulmin_48", "ulmin_49", "ulmin_50", "ulmin_51", "ulmin_52", "ulmin_53", "ulmin_54", "ulmin_55", "ulmin_56", "ulmin_57", "ulmin_58", "pyr_0", "pyr_1", "pyr_2", "pyr_3", "pyr_4", "pyr_5", "pyr_6", "pyr_7", "pyr_8", "pyr_9", "pyr_10", "pyr_11", "voidlow_0", "voidlow_1", "voidlow_2", "voidlow_3", "voidlow_4", "voidlow_5", "voidlow_6", "voidlow_7", "voidlow_8", "voidlow_9", "voidlow_10", "voidlow_11", "voidlow_12", "voidlow_13", "voidlow_14", "voidlow_15", "voidlow_16", "voidlow_17", "voidlow_18", "voidlow_19", "voidlow_20", "voidlow_21", "voidlow_22", "voidlow_23", "voidlow_24", "voidlow_25", "voidlow_26", "voidlow_27", "voidlow_28", "voidhigh_0", "voidhigh_1", "voidhigh_2", "voidhigh_3", "voidhigh_4", "voidhigh_5", "voidhigh_6", "voidhigh_7", "voidhigh_8", "voidhigh_9", "voidhigh_10", "voidhigh_11", "voidhigh_12", "voidhigh_13", "voidhigh_14", "voidhigh_15"];

const corruptorIndex = ["bloodpuddle", "bloodpuddlea", "bloodpuddleb", "chaospuddle", "chaospuddlea", "chaospuddleb", "colorfulpuddle", "colorfulpuddlea", "colorfulpuddleb", "colorfulpuddlerare", "darkpuddle", "darkpuddlea", "darkpuddleb", "deathgrip", "deathgripa", "deathgripb", "electricpuddle", "electricpuddlea", "electricpuddleb", "holypuddle", "holypuddlea", "holypuddleb", "icypuddle", "icypuddlea", "icypuddleb", "lavapuddle", "lavapuddlea", "lavapuddleb", "lonelyblob", "lonelybloba", "lonelyblobb", "lonelyblobrare", "metalpuddle", "metalpuddlea", "metalpuddleb", "spookynight", "spookynighta", "spookynightb", "sugarrush", "sugarrusha", "sugarrushb", "toxicpuddle", "toxicpuddlea", "toxicpuddleb", "trickortreat", "trickortreata", "trickortreatb", "waterpuddle", "waterpuddlea", "waterpuddleb", "armageddon", "armageddona", "armageddonb", "armageddonrare", "ashysky", "ashyskya", "ashyskyb", "ashyskyrare", "backlash", "backlasha", "backlashb", "backlashrare", "bomblottery", "bomblotterya", "bomblotteryb", "bomblotteryrare", "burningweapons", "burningweaponsa", "burningweaponsb", "burningweaponsrare", "chaoticwind", "chaoticwinda", "chaoticwindb", "chaoticwindrare", "coldfront", "coldfronta", "coldfrontb", "empower", "empowera", "empowerb", "empowerrare", "forestallies", "forestalliesa", "forestalliesb", "fungaloutbreak", "fungaloutbreaka", "fungaloutbreakb", "fungaloutbreakrare", "heavenlyarmaments", "heavenlyarmamentsa", "heavenlyarmamentsb", "heavenlyarmamentsrare", "heavyweaponry", "heavyweaponrya", "heavyweaponryb", "heavyweaponryrare", "hexproof", "hexproofa", "hexproofb", "hexproofrare", "hypotermia", "hypotermiaa", "hypotermiab", "hypotermiarare", "ironclad", "ironclada", "ironcladb", "ironcladrare", "lavabursts", "lavaburstsa", "lavaburstsb", "livingforest", "livingforesta", "livingforestb", "livingforestrare", "meatfeast", "meatfeasta", "meatfeastb", "melancholy", "melancholya", "melancholyb", "melancholyrare", "noxiousparasites", "noxiousparasitesa", "noxiousparasitesb", "noxiousparasitesrare", "pacifism", "pacifisma", "pacifismb", "pacifismrare", "poisonfields", "poisonfieldsa", "poisonfieldsb", "poisonfieldsrare", "putrefaction", "putrefactiona", "putrefactionb", "putrefactionrare", "resurrection", "resurrectiona", "resurrectionb", "resurrectionrare", "revenge", "revengea", "revengeb", "revengerare", "rosegarden", "rosegardena", "rosegardenb", "rosegardenrare", "sacredground", "sacredgrounda", "sacredgroundb", "sacredgroundrare", "snowfall", "snowfalla", "snowfallb", "snowfallrare", "starrynight", "starrynighta", "starrynightb", "starrynightrare", "subzero", "subzeroa", "subzerob", "subzerorare", "thornproliferation", "thornproliferationa", "thornproliferationb", "thornproliferationrare", "thunderstorm", "thunderstorma", "thunderstormb", "thunderstormrare", "upwind", "upwinda", "upwindb", "upwindrare", "vigorous", "vigorousa", "vigorousb", "vigorousrare", "windsofamnesia", "windsofamnesiaa", "windsofamnesiab", "windsofamnesiarare"];

const zoneList = ["senenthia", "aquarfall", "velkarath", "faeborg", "ulminin", "voidlow", "voidhigh"];

const zoneName = { "senenthia": "Senenthia", "aquarfall": "Aquarfall", "velkarath": "Velkarath", "faeborg": "Faeborg", "ulminin": "Ulminin", "voidlow": "The Void (low)", "voidhigh": "The Void (high)", "blackforge": "Black Forge", "spiderlair": "Spider Lair", "sectarium": "Hatch", "frozensewers": "Frozen Sewers", "pyramid": "Pyramid"}

const subclassIndex = Object.freeze({
    "archer": "Sylvie",
    "assassin": "Thuls",
    "bandit": "Yogger",
    "berserker": "Grukli",
    "cleric": "Reginald",
    "elementalist": "Evelyn",
    "fallen": "Navalea",
    "youngbinks": "Binks",
    "youngcharls": "Charls",
    "youngheiner": "Model C",
    "youngmagnus": "Magnus",
    "youngottis": "Ottis",
    "youngyogger": "Yogger",
    "loremaster": "Wilbur",
    "mercenary": "Magnus",
    "minstrel": "Gustav",
    "paladin": "Laia",
    "priest": "Ottis",
    "prophet": "Nezglekt",
    "pyromancer": "Cornelius",
    "ranger": "Andrin",
    "sentinel": "Heiner",
    "voodoowitch": "Malukah",
    "warden": "Bree",
    "warlock": "Zek"
})

$.fn.digits = function () {
    return this.each(function () {
        $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
};

$(document).ready(function () {
    document.title = "AtO Seed Checker";
    $("#loading_data").text("AtO v1.2.1 data has loaded!");
    $("#loading_data").addClass("fw-5");
    $("#text_seed").on('keyup', function () {
        $("#text_seed").val($("#text_seed").val().toUpperCase());
    });
    $("#btn_checkseed").on('click', function () {
        var seed = $("#text_seed").val().toUpperCase();
        var outcomes = [];
        zoneList.forEach(function (zone) {
            $("#accordion-" + zone + " .accordion-body .row").html("");
        });
        console.log("CHECKING SEED: " + seed)
        var currentNodeList = ($("#check_nodes_all").is(':checked') ? fullNodeList : optimalNodeList);
        currentNodeList.forEach(function (curNodeID) {
            unyRandom.initState(GetDeterministicHashCode(curNodeID + seed + "AssignSingleGameNode"));
            // console.log(curNodeID);
            if (unyRandom.range(0, 100) < nodeData[curNodeID].ExistsPercent) {
                // node exists!
                var flag1 = true;
                var flag2 = true;
                if (nodeData[curNodeID].NodeEvent.length != 0 && nodeData[curNodeID].NodeCombat.length != 0) {
                    if (unyRandom.range(0, 100) < nodeData[curNodeID].CombatPercent) {
                        flag1 = false
                    } else {
                        flag2 = false;
                    }
                }
                var str = "";
                if (flag1 && nodeData[curNodeID].NodeEvent.length != 0) {
                    // event!
                    var source = [];
                    for (var index = 0; index < nodeData[curNodeID].NodeEvent.length; ++index) {
                        if (eventData.hasOwnProperty(nodeData[curNodeID].NodeEvent[index]) && (eventData[nodeData[curNodeID].NodeEvent[index]].RequiredClass == "" || eventData[nodeData[curNodeID].NodeEvent[index]].RequiredClass == $("#select_party1").val() || eventData[nodeData[curNodeID].NodeEvent[index]].RequiredClass == $("#select_party2").val() || eventData[nodeData[curNodeID].NodeEvent[index]].RequiredClass == $("#select_party3").val() || eventData[nodeData[curNodeID].NodeEvent[index]].RequiredClass == $("#select_party4").val()) && eventData[nodeData[curNodeID].NodeEvent[index]].Requirement != "_demo") {
                            // meets class requirement and not demo
                            source.push({ eventID: nodeData[curNodeID].NodeEvent[index], eventPriority: index < nodeData[curNodeID].NodeEventPriority.length ? nodeData[curNodeID].NodeEventPriority[index] : 10000 });
                        };
                    };
                    if (source.length > 0) {
                        source.sort((a, b) => a.eventPriority - b.eventPriority);
                        var num1 = 1;
                        var num2 = source[0].eventPriority;
                        while (num1 < source.length && source[num1].eventPriority == num2) {
                            num1++;
                        }
                        if (num1 == 1) {
                            str = source[0].eventID;
                        } else {
                            if (nodeData[curNodeID].NodeEventPercent.length > 0 && nodeData[curNodeID].NodeEventPercent.length == nodeData[curNodeID].NodeEvent.length) {
                                var dict2 = [];
                                var index1 = 0;
                                for (var index2 = 0; index2 < num1; index2++) {
                                    var index3 = 0;
                                    while (index2 < nodeData[curNodeID].NodeEvent.length) {
                                        if (nodeData[curNodeID].NodeEvent[index3] == source[index1].eventID) {
                                            dict2.push({ eventID: nodeData[curNodeID].NodeEvent[index3], eventPercent: nodeData[curNodeID].NodeEventPercent[index3] });
                                            ++index1;
                                            break;
                                        }
                                        ++index3;
                                    }
                                }
                                var num3 = unyRandom.range(0, 100);
                                var num4 = 0;
                                dict2.some(function (curDictItem) {
                                    num4 += curDictItem.eventPercent;
                                    if (num3 < num4) {
                                        str = curDictItem.eventID;
                                        return true;
                                    }
                                    return false;
                                });
                            }
                            if (str == "") {
                                str = source[unyRandom.range(0, num1)].eventID;
                            }
                        }
                        outcomes.push({ nodeID: curNodeID, type: "event", outcome: str, extraID: "" });
                    } else {
                        outcomes.push({ nodeID: curNodeID, type: "ERROR", outcome: "sourceLength0", extraID: "" });
                    }
                } else if (flag2 && nodeData[curNodeID].NodeCombat.length != 0 && (curNodeID == "sen_1" || curNodeID == "sen_2" || curNodeID == "sen_3" || curNodeID == "aqua_27")) {
                    // combat with no corruptor!
                    outcomes.push({ nodeID: curNodeID, type: "combatnocorruptor", outcome: "NOCORRUPTOR", extraID: nodeData[curNodeID].NodeCombat[0] });
                } else if (flag2 && nodeData[curNodeID].NodeCombat.length != 0) {
                    // combat!
                    var combatID = nodeData[curNodeID].NodeCombat[0];
                    unyRandom.initState(GetDeterministicHashCode(curNodeID + seed));
                    var stringList = [];
                    for (var index = 0; index < corruptorIndex.length; ++index) {
                        //console.log(index);
                        if (!corruptorData[corruptorIndex[index]].OnlyInWeekly) {
                            stringList.push(corruptorIndex[index]);
                        };
                    };
                    var flag3 = false;
                    while (!flag3) {
                        var index1 = unyRandom.range(0, stringList.length);
                        if (!(stringList[index1] == "resurrection" || stringList[index1] == "resurrectiona" || stringList[index1] == "resurrectionb" || stringList[index1] == "resurrectionrare")) {
                            str = stringList[index1];
                            for (var index2 = 0; index2 < GetDeterministicHashCode(curNodeID + seed) % 10; ++index2) {
                                unyRandom.range(0, 100);
                            };
                            if (!corruptorData[str].OnlyInWeekly) {
                                flag3 = true;
                            };
                        };
                    };
                    outcomes.push({ nodeID: curNodeID, type: "combat", outcome: str, extraID: combatID });
                } else if (nodeData[curNodeID].GoToTown) {
                    outcomes.push({ nodeID: curNodeID, type: "town", outcome: nodeData[curNodeID].NodeZone, extraID: "" })
                } else if (nodeData[curNodeID].TravelDestination) {
                    outcomes.push({ nodeID: curNodeID, type: "arrivalpoint", outcome: "Arrive in " + zoneName[nodeData[curNodeID].NodeZone.toLowerCase()], extraID: "" })
                } else {
                    // other
                    outcomes.push({ nodeID: curNodeID, type: "other", outcome: "other!", extraID: "other!" });
                };

            } else {
                outcomes.push({ nodeID: curNodeID, type: "vanish", outcome: "<i>did not spawn :(</i>", extraID: "" });
            };

        });
        console.log(outcomes);
        var optimalEvents = {};
        var suboptimalEvents = {};
        var missingNodes = {};
        var combatCommon = {};
        var combatUncommon = {};
        var combatRare = {};
        var combatEpic = {};
        var combatMissing = {};
        var eventMissing = {};
        outcomes.forEach(function (curNode) {
            var node = nodeData[curNode.nodeID];
            var zone = "";
            switch (node.NodeZone.toLowerCase()) {
                case "senenthia":
                case "sectarium":
                    zone = "senenthia";
                    break;
                case "aquarfall":
                case "spiderlair":
                    zone = "aquarfall";
                    break;
                case "velkarath":
                case "blackforge":
                    zone = "velkarath";
                    break;
                case "faeborg":
                case "frozensewers":
                    zone = "faeborg";
                    break;
                case "ulminin":
                case "pyramid":
                    zone = "ulminin";
                    break;
                case "voidlow":
                    zone = "voidlow";
                    break;
                case "voidhigh":
                    zone = "voidhigh";
                    break;
            };
            var newHTML = `<div class="col meds-accordionbg-` + zone + `">
                        <div class="accordion accordion-single">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion_node_` + curNode.nodeID + `" aria-expanded="false" aria-controls="accordion_node_` + curNode.nodeID + `">
                                        <div class="input-group flex-nowrap w-100 h-100">
                                            <span class="input-group-text fw-5 meds-text-bg-` + zone + ` w-50">` + node.NodeName + `<span class="i ms-1 fw-3 nodeID">(` + curNode.nodeID + `)</span>`;
            var spriteName = "nodeIconBoss";
            var result = curNode.outcome;
            var optimal = "";
            if (optimalNodeList.includes(curNode.nodeID)) {
                optimal = `<span class="input-group-text fw-7 text-bg-success" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="optimal path has no special requirements for this node!"><i class="bi bi-check-lg"></i></span>`;
            } else {
                optimal = `<span class="input-group-text fw-7 text-bg-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="not part of the optimal path!"><i class="bi bi-dash-lg"></i></span>`;
            };
            var bodyHTML = "no special info for " + curNode.nodeID + " :)";
            switch (curNode.type) {
                case "event":
                    spriteName = eventData[curNode.outcome].EventSpriteMap;
                    result = eventData[curNode.outcome].EventName;
                    var optNode = optimalNodes.find(n => { return n.ID == curNode.nodeID });
                    if (typeof optNode != "undefined") {
                        // console.log("INDEX: " + index);
                        // console.log("ACCEPTED: " + optNode.acceptedEvents);
                        // console.log("WAS: " + curNode.outcome);
                        if (optNode.type == "combat") {
                            typeof combatMissing[zone] === "undefined" ? combatMissing[zone] = 1 : combatMissing[zone]++;
                            optimal = `<span class="input-group-text fw-7 text-bg-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="optimal path requires a combat here!"><i class="bi bi-x-lg"></i></span>`;
                        } else if (optNode.acceptedEvents.includes(curNode.outcome)) {
                            optimal = `<span class="input-group-text fw-7 text-bg-success" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="meets optimal path requirements!"><i class="bi bi-check-lg"></i></span>`;
                            typeof optimalEvents[zone] === "undefined" ? optimalEvents[zone] = 1 : optimalEvents[zone]++;
                        } else {
                            optimal = `<span class="input-group-text fw-7 text-bg-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="does not meet optimal path requirements!"><i class="bi bi-x-lg"></i></span>`;
                            typeof suboptimalEvents[zone] === "undefined" ? suboptimalEvents[zone] = 1 : suboptimalEvents[zone]++;
                        };
                    };
                    bodyHTML = `<table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="fw-7">Action</th>
                                            <th scope="col" class="fw-7">SS Exp.</th>
                                            <th scope="col" class="fw-7">SSC Exp.</th>
                                            <th scope="col" class="fw-7">FL Exp.</th>
                                            <th scope="col" class="fw-7">FLC Exp.</th>
                                        </tr>
                                    </thead>
                                    <tbody>`
                    eventData[curNode.outcome].Replies.forEach(function (replyID) {
                        if (typeof eventReplyData[replyID] !== "undefined") {
                            // console.log(parseInt(eventReplyData[replyID].SSExperienceReward));
                            var td = (eventReplyData[replyID].RequiredClass == "" || eventReplyData[replyID].RequiredClass == $("#select_party1").val() || eventReplyData[replyID].RequiredClass == $("#select_party2").val() || eventReplyData[replyID].RequiredClass == $("#select_party3").val() || eventReplyData[replyID].RequiredClass == $("#select_party4").val()) ? `` : ` class="text-danger"`;
                            bodyHTML += `<tr><td` + td + `>` + eventReplyData[replyID].ReplyActionText.replace("CharacterName", subclassIndex[eventReplyData[replyID].RequiredClass]) + `</th><td` + td + `>` + (parseInt(eventReplyData[replyID].SSExperienceReward) || "-") + `</td><td` + td + `>` + (parseInt(eventReplyData[replyID].SSCExperienceReward) || "-") + `</td><td` + td + `>` + (parseInt(eventReplyData[replyID].FLExperienceReward) || "-") + `</td><td` + td + `>` + (parseInt(eventReplyData[replyID].FLCExperienceReward) || "-") + `</td></tr>`;
                        }
                        // console.log("NPCID: " + NPCID);
                    });
                    break;
                case "combat":
                    spriteName = "nodeIconCombat";
                    result = corruptorData[curNode.outcome].CardName;
                    switch (corruptorData[curNode.outcome].CardRarity) {
                        case "Common":
                            typeof combatCommon[zone] === "undefined" ? combatCommon[zone] = 1 : combatCommon[zone]++;
                            result = corruptorData[curNode.outcome].CardName + `<span class="i ms-1 text-secondary">(Easy)</span>`;
                            break;
                        case "Uncommon":
                            typeof combatUncommon[zone] === "undefined" ? combatUncommon[zone] = 1 : combatUncommon[zone]++;
                            result = corruptorData[curNode.outcome].CardName + `<span class="i ms-1 text-success">(Average)</span>`;
                            break;
                        case "Rare":
                            typeof combatRare[zone] === "undefined" ? combatRare[zone] = 1 : combatRare[zone]++;
                            result = corruptorData[curNode.outcome].CardName + `<span class="i ms-1 text-primary">(Hard)</span>`;
                            resultColor = " text-bg-primary";
                            break;
                        case "Epic":
                            typeof combatEpic[zone] === "undefined" ? combatEpic[zone] = 1 : combatEpic[zone]++;
                            result = corruptorData[curNode.outcome].CardName + `<span class="i ms-1 meds-text-epic">(Extreme)</span>`;
                            break;
                    }
                    var optNode = optimalNodes.find(n => { return n.ID == curNode.nodeID });
                    if (typeof optNode != "undefined") {
                        if (optNode.type == "event") {
                            typeof eventMissing[zone] === "undefined" ? eventMissing[zone] = 1 : eventMissing[zone]++;
                            optimal = `<span class="input-group-text fw-7 text-bg-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="should be an event!"><i class="bi bi-x-lg"></i></span>`;
                        } else if (corruptorData[curNode.outcome].CardRarity == "Epic") {
                            optimal = `<span class="input-group-text fw-7 text-bg-success" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="meets optimal path requirements for this zone!"><i class="bi bi-check-lg"></i></span>`;
                        } else {
                            optimal = `<span class="input-group-text fw-7 text-bg-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="not an extreme corruptor!"><i class="bi bi-x-lg"></i></span>`;
                        };
                    };
                    bodyHTML = `<table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="fw-7">NPC</th>
                                            <th scope="col" class="fw-7">Experience</th>
                                            <th scope="col" class="fw-7">Gold</th>
                                            <th scope="col" class="fw-7">Base HP</th>
                                            <th scope="col" class="fw-7">Speed</th>
                                        </tr>
                                    </thead>
                                    <tbody>`
                    var totalExperience = 0;
                    var totalGold = 0;
                    combatData[curNode.extraID].NPCList.forEach(function (NPCID) {
                        if (typeof NPCData[NPCID] !== "undefined") {
                            totalExperience += NPCData[NPCID].ExperienceReward;
                            totalGold += NPCData[NPCID].GoldReward;
                            bodyHTML += `<tr><td>` + NPCData[NPCID].NPCName + `</th><td>` + NPCData[NPCID].ExperienceReward + `</td><td>` + NPCData[NPCID].GoldReward + `</td><td>` + NPCData[NPCID].HP + `</td><td>` + NPCData[NPCID].Speed + `</td></tr>`;
                        }
                        // console.log("NPCID: " + NPCID);
                    });
                    bodyHTML += `<tr class="i fw-5"><td>Total</td><td>` + totalExperience + `</td><td>` + totalGold + `</td><td></td><td></td></tr></tbody></table>`;
                    break;
                case "combatnocorruptor":
                    spriteName = "nodeIconCombat";
                    result = "no corruptor";
                    bodyHTML = `<table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="fw-7">NPC</th>
                                            <th scope="col" class="fw-7">Experience</th>
                                            <th scope="col" class="fw-7">Gold</th>
                                            <th scope="col" class="fw-7">Base HP</th>
                                            <th scope="col" class="fw-7">Speed</th>
                                        </tr>
                                    </thead>
                                    <tbody>`
                    var totalExperience = 0;
                    var totalGold = 0;
                    combatData[curNode.extraID].NPCList.forEach(function (NPCID) {
                        if (typeof NPCData[NPCID] !== "undefined") {
                            totalExperience += NPCData[NPCID].ExperienceReward;
                            totalGold += NPCData[NPCID].GoldReward;
                            bodyHTML += `<tr><td>` + NPCData[NPCID].NPCName + `</th><td>` + NPCData[NPCID].ExperienceReward + `</td><td>` + NPCData[NPCID].GoldReward + `</td><td>` + NPCData[NPCID].HP + `</td><td>` + NPCData[NPCID].Speed + `</td></tr>`;
                        }
                        // console.log("NPCID: " + NPCID);
                    });
                    bodyHTML += `<tr class="i fw-5"><td>Total</td><td>` + totalExperience + `</td><td>` + totalGold + `</td><td></td><td></td></tr></tbody></table>`;
                    break;
                case "other":
                    spriteName = "nodeIconActive";
                    break;
                case "vanish":
                    spriteName = "nodeIconBroken";

                    var optNode = optimalNodes.find(n => { return n.ID == curNode.nodeID });
                    if (typeof optNode != "undefined") {
                        typeof missingNodes[zone] === "undefined" ? missingNodes[zone] = 1 : missingNodes[zone]++;
                        if (optNode.type == "event") {
                            typeof eventMissing[zone] === "undefined" ? eventMissing[zone] = 1 : eventMissing[zone]++;
                            optimal = `<span class="input-group-text fw-7 text-bg-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="should be an event!"><i class="bi bi-x-lg"></i></span>`;
                        } else if (optNode.type == "combat") {
                            typeof combatMissing[zone] === "undefined" ? combatMissing[zone] = 1 : combatMissing[zone]++;
                            optimal = `<span class="input-group-text fw-7 text-bg-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="optimal path requires a combat here!"><i class="bi bi-x-lg"></i></span>`;
                        } else {
                            optimal = `<span class="input-group-text fw-7 text-bg-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="node missing! :("><i class="bi bi-x-lg"></i></span>`;
                        };
                    };
                    break;
                case "town":
                case "shop":
                    spriteName = "nodeIconShop";
                    break;
                case "arrivalpoint":
                    spriteName = "nodeIconActive";
                    break;
                case "ERROR":
                    break;
            };
            // newHMTL += `<span class="ms-auto me-0" style="min-width: 60px;"><img src="AtO_images\nodeIconCombat.png" class="img-fluid m-auto" style="max-height: 30px;"></span>`

            newHTML += `<span class="ms-auto me-0" style="min-width: 60px;"><img src="AtO_images\\` + spriteName + `.png" class="img-fluid m-auto" style="max-height: 30px;" alt="` + curNode.type + ` node: ` + spriteName + `"/></span>`;
            newHTML += `</span><span class="input-group-text fw-5 meds-text-bg-` + zone + ` w-50">` + result + `</span>` + optimal + `</div></button></h2>
                                <div id="accordion_node_` + curNode.nodeID + `" class="accordion-collapse collapse">
                                    <div class="accordion-body">` + bodyHTML + `</div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            /* #TODO:
             * make NodeID a toggle checkbox for display? then just addclass visually-hidden to .nodeID
             * towns, shops, quests, bosses, anvils, giovannas, rest stops, area exits
             * all nodes
             * experience clamping?
             * accessibility. are aria tags sufficient? I know the colors are probably shit (especially green on green, and the purple!!) how do we test that?
            */
            $("#accordion-" + zone + " .accordion-body .row").append(newHTML);
        });
        var newTooltipTriggerList = document.querySelectorAll('.col .input-group [data-bs-toggle="tooltip"]');
        var newTooltipList = [...newTooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
        $("#summary-tbody").html("");
        zoneList.forEach(function (zone) {
            // this is messy af and v. overkill (so many variables!) but the witching hour has come and I miss painkillers. will revisit when I do score estimates.
            var iOptimalEvents = (typeof optimalEvents[zone] === "undefined") ? 0 : optimalEvents[zone];
            var iSuboptimalEvents = (typeof suboptimalEvents[zone] === "undefined") ? 0 : suboptimalEvents[zone];
            var iMissingNodes = (typeof missingNodes[zone] === "undefined") ? 0 : missingNodes[zone];
            var iCombatCommon = (typeof combatCommon[zone] === "undefined") ? 0 : combatCommon[zone];
            var iCombatUncommon = (typeof combatUncommon[zone] === "undefined") ? 0 : combatUncommon[zone];
            var iCombatRare = (typeof combatRare[zone] === "undefined") ? 0 : combatRare[zone];
            var iCombatEpic = (typeof combatEpic[zone] === "undefined") ? 0 : combatEpic[zone];
            var iCombatMissing = (typeof combatMissing[zone] === "undefined") ? 0 : combatMissing[zone];
            var iEventMissing = (typeof eventMissing[zone] === "undefined") ? 0 : eventMissing[zone];
            var iTotalEvents = iOptimalEvents + iSuboptimalEvents + iEventMissing;
            var iDoneCombats = iCombatCommon + iCombatUncommon + iCombatRare + iCombatEpic;
            var iTotalCombats = iDoneCombats + iCombatMissing;
            var iCorruptorScore = iCombatCommon * 40 + iCombatUncommon * 80 + iCombatRare * 130 + iCombatEpic * 200;
            var iMaxCorruptorScore = iTotalCombats * 200;
            var newHTML = iTotalEvents == 0 ? "" : `<span class="text-` + (iOptimalEvents == iTotalEvents ? `success` : `danger`) + `">` + iOptimalEvents + `/` + iTotalEvents + ` events</span>, `;
            newHTML += `<span class="text-` + (iCombatMissing == 0 ? `success` : `danger`) + `">` + iDoneCombats + `/` + iTotalCombats + ` corruptors</span> (<span class="meds-text-epic">` + iCombatEpic + ` Extreme</span>, <span class="text-primary">` + iCombatRare + ` Hard</span>, <span class="text-success">` + iCombatUncommon + ` Average</span>, <span class="text-secondary">` + iCombatCommon + ` Easy</span>)`;
            $('[data-bs-target="#accordion-' + zone + '"] div span.ms-auto.me-2').html(newHTML);
            newHTML = `<tr><th scope="row" class="fw-7">` + zoneName[zone] + `</th>
    <td class="fw-5 text-` + (iMissingNodes == 0 ? `success` : `danger`) + `">` + iMissingNodes + `</td>
    <td class="fw-5 text-` + (iEventMissing == 0 ? `success` : `danger`) + `">` + iOptimalEvents + `/` + iTotalEvents + `</td>
    <td class="fw-5 text-` + (iCombatMissing == 0 ? `success` : `danger`) + `">` + iDoneCombats + `/` + iTotalCombats + `</td>
    <td class="fw-5 meds-text-epic">` + iCombatEpic + `</td>
    <td class="fw-5 text-primary">` + iCombatRare + `</td>
    <td class="fw-5 text-success">` + iCombatUncommon + `</td>
    <td class="fw-5 text-secondary">` + iCombatCommon + `</td>
    <td>` + iCorruptorScore + `/` + iMaxCorruptorScore + `</td>
</tr>`;
            $("#summary-tbody").append(newHTML);
        });
        $(".accordion.visually-hidden").removeClass("visually-hidden");

    });
    $("#btn_show_settings").on('click', function () {
        bootstrap.Modal.getOrCreateInstance("#modal_settings").show();
    });
    
    $("#check_nodes_optimal").on('change', function () {
        if (localStorage.getItem("check_nodes_all") == "true") {
            localStorage.setItem("check_nodes_all", false);
        } else {
            localStorage.setItem("check_nodes_all", true);
        };
    });
    $("#check_nodes_all").on('change', function () {
        if (localStorage.getItem("check_nodes_all") == "true") {
            localStorage.setItem("check_nodes_all", false);
        } else {
            localStorage.setItem("check_nodes_all", true);
        };
    });
    if (localStorage.getItem("check_nodes_all") === "false") { $("#check_nodes_optimal").prop('checked', true); };

    if (subclassIndex.hasOwnProperty(localStorage.getItem("party1"))) { $("#select_party1").val(localStorage.getItem("party1")); };
    if (subclassIndex.hasOwnProperty(localStorage.getItem("party2"))) { $("#select_party2").val(localStorage.getItem("party2")); };
    if (subclassIndex.hasOwnProperty(localStorage.getItem("party3"))) { $("#select_party3").val(localStorage.getItem("party3")); };
    if (subclassIndex.hasOwnProperty(localStorage.getItem("party4"))) { $("#select_party4").val(localStorage.getItem("party4")); };
    $('#select_party1').on('input', function () {
        localStorage.setItem("party1", $("#select_party1").val());
        $("#btn_checkseed").click();
    });
    $('#select_party2').on('input', function () {
        localStorage.setItem("party2", $("#select_party2").val());
        $("#btn_checkseed").click();
    });
    $('#select_party3').on('input', function () {
        localStorage.setItem("party3", $("#select_party3").val());
        $("#btn_checkseed").click();
    });
    $('#select_party4').on('input', function () {
        localStorage.setItem("party4", $("#select_party4").val());
        $("#btn_checkseed").click();
    });


    $("#btn_checkseed").prop("disabled", false);
});

function GetDeterministicHashCode(str) {
    // because js numbers are doubles, we have to do some funky conversion
    var num = 352654597;
    var num2 = num;
    for (var i = 0; i < str.length; i += 2) {
        num = (((num << 5) + num) ^ str.charCodeAt(i)) | 0;
        if (i < str.length - 1) {
            num2 = (((num2 << 5) + num2) ^ str.charCodeAt(i + 1)) | 0;
        };
    };
    return Long.fromInt(num2).mul(Long.fromInt(1566083941)).add(Long.fromInt(num)).toInt().toString();
};

function deletePropertiesByType(obj, type) {
    var newobj = {};
    Object.keys(obj).forEach(key => {
        switch (type) {
            case "eventReply":
                newobj[key] = (({ DustCost, GoldCost, ReplyActionText, RequiredClass, Requirement, RequirementBlocked, RequirementCard, RequirementItem, RequirementMultiplayer, RequirementSku, SSCombat, SSEvent, SSExperienceReward, SSNodeTravel, SSCCombat, SSCEvent, SSCExperienceReward, SSCNodeTravel, FLCombat, FLEvent, FLExperienceReward, FLNodeTravel, FLCCombat, FLCEvent, FLCExperienceReward, FLCNodeTravel }) => ({ DustCost, GoldCost, ReplyActionText, RequiredClass, Requirement, RequirementBlocked, RequirementCard, RequirementItem, RequirementMultiplayer, RequirementSku, SSCombat, SSEvent, SSExperienceReward, SSNodeTravel, SSCCombat, SSCEvent, SSCExperienceReward, SSCNodeTravel, FLCombat, FLEvent, FLExperienceReward, FLNodeTravel, FLCCombat, FLCEvent, FLCExperienceReward, FLCNodeTravel }))(obj[key]);
                break;
            case "event":
                newobj[key] = (({ EventID, EventName, EventSpriteMap, EventTier, Replies, RequiredClass, Requirement }) => ({ EventID, EventName, EventSpriteMap, EventTier, Replies, RequiredClass, Requirement }))(obj[key]);
                break;
            case "corruptorData":
                newobj[key] = (({ OnlyInWeekly, CardName, CardUpgraded, CardRarity }) => ({ OnlyInWeekly, CardName, CardUpgraded, CardRarity }))(obj[key]);
                break;
            case "nodeData":
                newobj[key] = (({ ExistsPercent, CombatPercent, NodeEvent, NodeCombat, NodeEventPriority, NodeEventPercent, NodeZone, NodeName }) => ({ ExistsPercent, CombatPercent, NodeEvent, NodeCombat, NodeEventPriority, NodeEventPercent, NodeZone, NodeName }))(obj[key]);
                break;
            case "combatData":
                newobj[key] = (({ CombatID, CombatTier, EventData, NPCList }) => ({ CombatID, CombatTier, EventData, NPCList }))(obj[key]);
                break;
            case "NPCData":
                newobj[key] = (({ BaseMonster, ExperienceReward, HellModeMob, IsBoss, IsNamed, NgPlusMob, NPCName, UpgradedMob, GoldReward, HP, Speed }) => ({ BaseMonster, ExperienceReward, HellModeMob, IsBoss, IsNamed, NgPlusMob, NPCName, UpgradedMob, GoldReward, HP, Speed }))(obj[key]);
                break;
        };
    });
    return newobj;
};