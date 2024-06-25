// project.test.js
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import Project from '../models/Project';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /projects', () => {
  beforeEach(() => {
    // Supprime tous les projets de la base de données avant chaque test
    Project.deleteMany({});
  });

  it('should return an empty array if there are no projects', async () => {
    const res = await chai.request(app).get('/projects');
    expect(res.body).to.be.an('array').that.is.empty;
  });

  it('should return a list of projects', async () => {
    // Crée deux projets de test
    const project1 = new Project({ name: 'Project 1', description: 'Project 1 description' });
    const project2 = new Project({ name: 'Project 2', description: 'Project 2 description' });
    await project1.save();
    await project2.save();

    const res = await chai.request(app).get('/projects');
    expect(res.body).to.be.an('array').that.has.lengthOf(2);
    expect(res.body[0]).to.have.property('name', 'Project 1');
    expect(res.body[1]).to.have.property('name', 'Project 2');
  });
});
