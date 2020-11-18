
import projectsPage from "../../elements/ProjectsPage";
import feenPage from "../../elements/FeenPage";

    describe('Create and Accept Project', () => {

        it.skip('Create and Accept Project', () => {

            projectsPage.createProject();
            projectsPage.acceptProject();
            feenPage.addProjectToMid();
        });

    });

