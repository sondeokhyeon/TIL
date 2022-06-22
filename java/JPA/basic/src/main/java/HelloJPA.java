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
//            tx.begin();
//                Member member = new Member();
//                member.setId(1L);
//                member.setName("홍길동");
//
//                Member member1 = new Member();
//                member1.setId(2L);
//                member1.setName("홍길동");
//
//                em.persist(member);
//                em.persist(member1);
//            tx.commit();

            tx.begin();
                Member member2 = em.find(Member.class, 1L);
                member2.setName("김길동!");
            tx.commit();

            tx.begin();
                Member member3 = em.find(Member.class, 2L);
                em.remove(member3);
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
