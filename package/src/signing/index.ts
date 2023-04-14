import { EPCISDocument, EPCISEvent } from "../types";
import { signJSONLD } from "./json-ld-signatures";

export async function signEPCIS(issuer: string, subject: EPCISDocument | EPCISEvent, keyPair: any) {

    return signJSONLD(issuer, subject, keyPair);

}