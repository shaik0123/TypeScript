enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

interface Resource<T>{
    uid: number;
    resourceName: ResourceType;
    data: T;
 }
 
 const docTwo: Resource<string> = {
    uid: 1,
    resourceName:ResourceType.BOOK,
    data: 'shaik'
 }

 const docThree: Resource<string[]> = {
    uid:2,
    resourceName:ResourceType.DIRECTOR,
    data: ['bread','milk','roll']
 }

 console.log(docTwo, docThree);
 