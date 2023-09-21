import { findAConsultant } from './find-a-consultant/find-a-consultant';
import { initHeader } from './header/consultant-header';
import { verifyAndStoreConsultant } from './storage/verify-consultant';
import { verifyAndStoreParty } from './storage/verify-party';

export async function initConsultant(context) {
    await verifyAndStoreConsultant(context);
    verifyAndStoreParty();
    initHeader(context);
    findAConsultant();
}
