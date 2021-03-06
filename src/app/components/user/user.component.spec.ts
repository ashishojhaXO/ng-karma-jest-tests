import { UserService } from './user.service';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';
import { UserServiceMock } from '../../mocks/user.service.mock';

describe('UserComponent', () => {
    let comp: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    let userService: UserService;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [
                UserComponent
            ],
            providers: [
                { provide: UserService, useClass: UserServiceMock }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserComponent);
            comp = fixture.componentInstance; // UserComponent test instance
        });

        userService = TestBed.get(UserService);
        httpMock = TestBed.get(HttpTestingController);
    }));

    it(`should have one user`, async(() => {
        expect(comp.users.length).toEqual(1);
    }));

    it(`html should render one user`, async(() => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('p');
        expect(el.innerText).toContain('user1');
    }));


    it(`should fetch posts as an Observable`, async(inject([HttpTestingController, UserService],
    (httpClient: HttpTestingController, userService: UserService) => {


      console.log("userSER: ", userService);


      userService.getUsersFromServer()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(2);
        });

      let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
      expect(req.request.method).toBe("GET");

    //   req.flush(userItem);
      httpMock.verify();

    })
    
    ));

});
