import { loadDB,saveToDatabase,createWorkout,deleteWorkout as eliminarWorkout, updateWorkout, createWorkoutRecord, deleteWorkoutRecord as eliminarWorkoutRecord, updateWorkoutRecord } from "../database/ficheros";
import { Filtros, WorkoutRecord } from "../types/workout";
import {v4 as uuid} from "uuid";
import { toHttpError } from "../utils/httpError";


export function getAllRecords(){
    return loadDB().records;
}

export function getWorkoutRecord(recordBuscado:string){
    try{
    return loadDB().records.find((record) => record.id == recordBuscado) ?? null;
    }catch(error){
        throw toHttpError(error);
    }
}


export function postWorkoutRecord(recordPost:WorkoutRecord){
    try{
    const id:string = uuid();
    const workout:string = uuid();
    const record:string = uuid();
    const memberId:string = uuid();
    const member:string = uuid();
    recordPost.id = id;
    recordPost.workout = workout;
    recordPost.record = record;
    recordPost.memberId = memberId;
    recordPost.member = member;
    return createWorkoutRecord(recordPost);
    }catch(error){
        throw toHttpError(error);
    }
}
export function patchWorkoutRecord(recordPatch:WorkoutRecord){
    try{
    let recordAnt:WorkoutRecord = getWorkoutRecord(recordPatch.id)!;
    if(recordAnt.workout == null) recordPatch.workout = recordAnt.workout;
    if(recordAnt.record == null) recordPatch.record = recordAnt.record;
    if(recordAnt.memberId == null) recordPatch.memberId = recordAnt.memberId;
    if(recordAnt.member == null) recordPatch.member = recordAnt.member;
    
    return updateWorkoutRecord(recordPatch);
    } catch(error){
        throw toHttpError(error);
    }
}

export function deleteWorkoutRecord(id:string){
    try{
    return eliminarWorkoutRecord(id);
    }catch(error){
        throw toHttpError(error);
    }
}