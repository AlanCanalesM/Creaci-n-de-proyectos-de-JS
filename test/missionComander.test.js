const MissionComander =  require("./../app/missionComander")
describe("Unit Tests for missionComander class", () => {
    test('Create a missionComander object ', () => {
      const comander=new MissionComander("Alan")
      expect(comander.name).toBe("Alan");
    });
  })
  