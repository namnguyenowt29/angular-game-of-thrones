import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  getResourcesValues(resourceUrl: string | undefined) {
    let url = resourceUrl?.split('/');

    return {
      type: url && url[url?.length - 2],
      id: url && url[url?.length - 1],
    };
  }
}
