import { TestBed } from "@angular/core/testing";

import { UserService, EnumUserGender } from "./user.service";
import { HttpClientModule } from "@angular/common/http";

describe("UserService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    })
  );

  it("should be created", () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it("should be generated a male random avatar ", async () => {
    const service: UserService = TestBed.get(UserService);

    const avatar = await service.generateAvatar(EnumUserGender.men);

    expect(avatar).toContain("men");
  });

  it("should be generated a female random avatar ", async () => {
    const service: UserService = TestBed.get(UserService);

    const avatar = await service.generateAvatar(EnumUserGender.women);

    expect(avatar).toContain("women");
  });
});
