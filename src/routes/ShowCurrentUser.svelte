<script lang="ts">
	import { fragment, graphql, type UserName } from '$houdini';

	export let user: UserName;

	$: data = fragment(
		user,
		graphql`
			fragment UserName on User {
				name
			}
		`,
	);
</script>

<p>User: {$data.name}</p>
