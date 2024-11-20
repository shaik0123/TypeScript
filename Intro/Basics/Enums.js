var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var docTwo = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: 'shaik'
};
var docThree = {
    uid: 2,
    resourceName: ResourceType.DIRECTOR,
    data: ['bread', 'milk', 'roll']
};
console.log(docTwo, docThree);
