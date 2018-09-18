import request from '../utils/request';

export async function addGroup(addData) {
    let response=await request.push('/group',addData);
    return response;
}
export async function modifyGroup(modifyData) {
    let response=await request.push('/group',modifyData);
    return response;
}
export async function addPath(addData) {
    let response=await request.push('/group',addData);
    return response;
}
export async function modifyPath(modifyData) {
    let response=await request.push('/group',modifyData);
    return response;
}
export async function deletePath(record) {
    let response=await request.push('/group',record);
    return response;
}