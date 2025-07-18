import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService { 

  private profile?: Profile;
  private profileSubject = new BehaviorSubject<Profile | undefined>(undefined);
  
  private urlImg?: string;
  private urlImgSubject = new BehaviorSubject<string>('');

  constructor() {
    if (!this.profile) {
      const json = localStorage.getItem('profile');
      if (json) {
        this.profile = JSON.parse(json);
        this.profileSubject.next(this.profile);
      }
    }
    if (!this.urlImg) {
      const urlj = localStorage.getItem('urlImg');
      if (urlj) {
        this.urlImg = urlj;
        this.urlImgSubject.next(this.urlImg);
      }
    }
  }
  clearProfile() {
    localStorage.removeItem("profile");
    this.profile = undefined;
    this.profileSubject.next(undefined);
    localStorage.removeItem("urlImg");
    this.urlImg = undefined;
    this.urlImgSubject.next('');
  }

  getProfile(): Observable<Profile | undefined> {
    return this.profileSubject.asObservable();
  }

  setProfile(profile: Profile): void {
    this.profile = profile;
    localStorage.setItem('profile', JSON.stringify(profile));
    this.profileSubject.next(this.profile);
  }

  getUrlImage() {
    return this.urlImgSubject.asObservable();
  }
  setUrlImage(url: string) {
    this.urlImg = url;
    localStorage.setItem('urlImg', url);
    this.urlImgSubject.next(this.urlImg);
  }
}
