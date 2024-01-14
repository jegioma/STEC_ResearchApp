import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Form } from 'src/app/models/form.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  forms2500!: Observable<Form[]>;
  forms4200!: Observable<Form[]>;
  forms4500!: Observable<Form[]>;
  formDoc!: AngularFirestoreDocument<Form>;

  constructor(private firestore: AngularFirestore) {
    this.defaultForms();
  }

  defaultForms() {
    this.forms2500 = this.firestore.collection<Form>('forms2500', ref => ref.orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4200 = this.firestore.collection<Form>('forms4200', ref => ref.orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4500 = this.firestore.collection<Form>('forms4500', ref => ref.orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  defaultSearchedForms(name: string) {
    this.forms2500 = this.firestore.collection<Form>('forms2500', ref => ref.where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4200 = this.firestore.collection<Form>('forms4200', ref => ref.where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4500 = this.firestore.collection<Form>('forms4500', ref => ref.where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  pendingForms() {
    this.forms2500 = this.firestore.collection<Form>('forms2500', ref => ref.where('approved', '==', false).where('denied', '==', false)
      .orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Form;
          data.id = a.payload.doc.id;
          return data;
        });
      }));

    this.forms4200 = this.firestore.collection<Form>('forms4200', ref => ref.where('approved', '==', false).where('denied', '==', false)
      .orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Form;
          data.id = a.payload.doc.id;
          return data;
        });
      }));

    this.forms4500 = this.firestore.collection<Form>('forms4500', ref => ref.where('approved', '==', false).where('denied', '==', false)
      .orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Form;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  pendingSearchedForms(name: string) {
    this.forms2500 = this.firestore.collection<Form>('forms2500', ref => ref.where('approved', '==', false).where('denied', '==', false)
      .where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Form;
          data.id = a.payload.doc.id;
          return data;
        });
      }));

    this.forms4200 = this.firestore.collection<Form>('forms4200', ref => ref.where('approved', '==', false).where('denied', '==', false)
      .where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Form;
          data.id = a.payload.doc.id;
          return data;
        });
      }));

    this.forms4500 = this.firestore.collection<Form>('forms4500', ref => ref.where('approved', '==', false).where('denied', '==', false)
      .where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Form;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  approvedForms() {
    this.forms2500 = this.firestore.collection<Form>('forms2500', ref => ref.where('approved', '==', true).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4200 = this.firestore.collection<Form>('forms4200', ref => ref.where('approved', '==', true).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4500 = this.firestore.collection<Form>('forms4500', ref => ref.where('approved', '==', true).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  approvedSearchedForms(name: string) {
    this.forms2500 = this.firestore.collection<Form>('forms2500', ref => ref.where('approved', '==', true).where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4200 = this.firestore.collection<Form>('forms4200', ref => ref.where('approved', '==', true).where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4500 = this.firestore.collection<Form>('forms4500', ref => ref.where('approved', '==', true).where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  deniedForms() {
    this.forms2500 = this.firestore.collection<Form>('forms2500', ref => ref.where('denied', '==', true).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4200 = this.firestore.collection<Form>('forms4200', ref => ref.where('denied', '==', true).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4500 = this.firestore.collection<Form>('forms4500', ref => ref.where('denied', '==', true).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  deniedSearchedForms(name: string) {
    this.forms2500 = this.firestore.collection<Form>('forms2500', ref => ref.where('denied', '==', true).where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4200 = this.firestore.collection<Form>('forms4200', ref => ref.where('denied', '==', true).where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4500 = this.firestore.collection<Form>('forms4500', ref => ref.where('denied', '==', true).where('primaryAdvisor', '==', name).orderBy('time', 'desc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  keySearchForms(key: string) {
    this.forms2500 = this.firestore.collection<Form>('forms2500', ref => ref.where('id', '==', key)).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4200 = this.firestore.collection<Form>('forms4200', ref => ref.where('id', '==', key)).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.forms4500 = this.firestore.collection<Form>('forms4500', ref => ref.where('id', '==', key)).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Form;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  get2500Forms() {
    return this.forms2500;
  }

  get4200Forms() {
    return this.forms4200;
  }

  get4500Forms() {
    return this.forms4500;
  }

  deleteForm(form: Form) {
    this.formDoc = this.firestore.doc(`forms${form.formNumber}/${form.id}`);
    this.formDoc.delete();
  }

  updateForm(form: Form) {
    this.formDoc = this.firestore.doc(`forms${form.formNumber}/${form.id}`);
    this.formDoc.update(form);
  }

}
