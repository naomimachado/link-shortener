package com.link;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.link.shorten.model.Link;
import com.link.shorten.repository.LinkRepository;
import com.link.shorten.service.LinkShortenService;

@RunWith(SpringRunner.class)
@DataJpaTest
public class TestLinkServicesAndRepository {
	
	@Autowired
    TestEntityManager entityManager;
	
	@Autowired
	LinkRepository linkRepository;
	
	@Autowired
	LinkShortenService linkShorten;

	@Test
	public void testFindByLongUrl() {
		Link testLink = new Link("https://www.walmart.com/", "qwe54g");
		entityManager.persist(testLink);
		entityManager.flush();
		
		Optional<Link> findLink = linkRepository.findByLongUrl(testLink.getLongLink());
		
		assertThat(findLink.get().getLongLink().equals(testLink.getLongLink()));
	}
	
	@Test
	public void testFindByShortkey() {
		Link testLink = new Link("https://www.walmart.com/", "qwe54g");
		entityManager.persist(testLink);
		entityManager.flush();
		
		Optional<Link> findLink = linkRepository.findByShortLinkKey(testLink.getShortLinkKey());
		
		assertThat(findLink.get().getShortLinkKey().equals(testLink.getShortLinkKey()));
	}
	
	@Test
	public void testCreateShortLink() {
		String shortLink = linkShorten.createShortUrl(null);
	}

}
