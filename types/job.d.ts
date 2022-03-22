import { KeyableAny } from "./globals";

/**
 * Single Job 
 */
export type Job = {
    absolute_url: string;
    content: string;
    data_compliance: Array<KeyableAny>;
    departments: Array<KeyableAny>;
    id: number;
    internal_job_id: number;
    location: KeyableAny;
    metadata: Array<KeyableAny>;
    offices: Array<KeyableAny>;
    requisition_id: string;
    title: string;
    updated_at: string;
}