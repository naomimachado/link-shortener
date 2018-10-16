package com.link.shorten.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.link.shorten.model.Link;

/**
 * The Interface LinkRepository.
 */
public interface LinkRepository extends CrudRepository<Link, Integer> {
	
	/**
	 * Find by long url.
	 * Returns the optional Link object found from the table Link with matching longLink
	 *
	 * @param longLink the long link
	 * @return the optional Link
	 */
	@Query("SELECT l FROM Link l WHERE l.longLink = :longLink")
	Optional<Link> findByLongUrl(@Param("longLink") String longLink);
	
	/**
	 * Find by short link key.
	 * Returns the optional Link object found from the table Link with matching shortLinkKey
	 *
	 * @param shortLinkKey the short link key
	 * @return the optional
	 */
	@Query("SELECT l FROM Link l WHERE l.shortLinkKey = :shortLinkKey")
	Optional<Link> findByShortLinkKey(@Param("shortLinkKey") String shortLinkKey);

}
