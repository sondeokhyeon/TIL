package com.example.querydsl.entity;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

@SpringBootTest
@Transactional
public class MemberTest {

    @Autowired
    EntityManager em;

    @Test
    void test() {
        Team team1 = new Team("teamA");
        em.persist(team1);

        Member member1 = new Member("member1", 10);
        em.persist(member1);

        em.flush();
        em.clear();

        List<Member> members = em.createQuery("select m from Member m", Member.class).getResultList();

        for(Member member : members) {
            System.out.println("member = " + member);
            System.out.println("member.team = " + member.getTeam());
        }

        // Member findMember = em.find(Member.class, member.getId());
        // System.out.println("findMember = " + findMember);
    }
}
