import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class HelloJPA {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();

        try {
            tx.begin();
//            Member member = new Member();
//
//            member.setId(1L);
//            member.setName("홍길동");
//            em.persist(member);

            Member findMember = em.find(Member.class, 1L);
            System.out.println(findMember.getName());
            findMember.setName("홍길동");
            System.out.println(findMember.getName());
            tx.commit();




        } catch (Exception e) {
            e.printStackTrace();
            tx.rollback();
        } finally {
            em.close();
        }
        emf.close();
    }
}
